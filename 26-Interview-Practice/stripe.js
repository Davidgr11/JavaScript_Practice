console.info("---Stripe Interview Problem TRANSACTION MONITOR---");

/*
Based on a payment microservice of a fintech startup, you receive a stream
of transactions in text format where each line repesents an event.
Construct an analyzer that detect transaction anomalies, errors and metrics.

input structure: [timestamp] [userId] [status] [amountOrError]
    2025-11-04T09:00:00Z userA SUCCESS 150.00
    2025-11-04T09:01:00Z userA FAILED insufficient_funds


Rules to generate alerts:
1. If transaction status is FAILED, generate an alert with the reason "Transaction failed for [user] with reason: [error]".
2. If there are 3 FAILED transactions from the same user within a 5 minute window, generate an alert with the reason "Multiple failures (>=3) within 5 minutes for user [user]".
3. If a transaction amount exceeds $1000, generate an alert with the reason "High value transaction of $[amount] for user [user]".


Where the metrics should include per user:
successCount	->  Número de transacciones exitosas
failCount	->  Número de transacciones fallidas
averageAmount	->  Promedio de montos en transacciones exitosas
alertsGenerated	->  Total de alertas generadas para ese usuario

*/

const input2 = {
    "body": {
        "transactions": "2025-11-04T09:00:00Z userA SUCCESS 1500.00\n2025-11-04T09:01:00Z userA FAILED insufficient_funds\n2025-11-04T09:02:00Z userA SUCCESS 250.00\n2025-11-04T09:03:00Z userB SUCCESS 1000.00\n2025-11-04T09:04:00Z userA FAILED network_error\n2025-11-04T09:05:00Z userA FAILED network_error\n2025-11-04T09:06:00Z userB SUCCESS 500.00\n2025-11-04T09:07:00Z userB FAILED timeout\n2025-11-04T09:08:00Z userB FAILED timeout\n2025-11-04T09:09:00Z userB FAILED timeout\n2025-11-04T09:10:00Z userA SUCCESS 100.00"
    }
};

class AlertTransaction {
    constructor(userId, reason, timestamp, status, amountOrError) {
        this.userId = userId;
        this.reason = reason;
        this.timestamp = timestamp;
        this.status = status;
        this.amountOrError = amountOrError;
    }
}

const transactionMonitor = ((input) => {
    const transText = input.body.transactions.trim();
    const transLines = transText.split('\n');
    const trans = transLines.map(line => {
        const [timestamp, userId, status, ...rest] = line.split(' ');
        const amountOrError = rest.join(' ');
        return { timestamp, userId, status, amountOrError };
    });

    const alerts = [];
    const metrics = {};
    const windowFailures = {};

    trans.forEach(t => {
        const { timestamp, userId, status, amountOrError } = t;
        const time = new Date(timestamp).getTime();

        if (!metrics[userId]) metrics[userId] = { successCount: 0, failCount: 0, amountSum: 0, alertsGenerated: 0 };

        // RULE 1: Alert for failed transactions
        if (status === 'FAILED') {
            alerts.push(new AlertTransaction(userId, `Transaction failed for ${userId} with reason: ${amountOrError}`, timestamp, status, amountOrError));
            metrics[userId].alertsGenerated++;
            metrics[userId].failCount++;

            // Track failures for RULE 2
            if (!windowFailures[userId]) windowFailures[userId] = [];
            windowFailures[userId].push(time);

            const cutoff = time - 5 * 60 * 1000;
            windowFailures[userId] = windowFailures[userId].filter(t => t >= cutoff);

            if (windowFailures[userId].length >= 3) {
                alerts.push(new AlertTransaction(userId, `Multiple failures (>=3) within 5 minutes for user ${userId}`, timestamp, status, amountOrError));
                metrics[userId].alertsGenerated++;
                windowFailures[userId] = [];
            }
        } else if (status === 'SUCCESS') {
            metrics[userId].successCount++;
            const amount = parseFloat(amountOrError);
            metrics[userId].amountSum += amount;

            if (amount > 1000) {
                alerts.push(new AlertTransaction(userId, `High value transaction of $${amount} for user ${userId}`, timestamp, status, amountOrError));
                metrics[userId].alertsGenerated++;
            }
        }

    });
    for (const userId in metrics) {
        const m = metrics[userId];
        m.averageAmount = m.successCount ? m.amountSum / m.successCount : 0;
        delete m.amountSum;
    }

    return { alerts, metrics };
});


console.log(transactionMonitor(input2));