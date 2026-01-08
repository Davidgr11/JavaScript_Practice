console.info("---Amazon Interview Problem LOG PARSER & ANALYZER---");
/*
Log parser and analyzer
-------------------------

You're given a string representing a series of log entries in a JSON format.
Each log entry contains a timestamp, log level (INFO, WARN, ERROR), service and message.
Example: 
*/
const input = {
    "body": {
        "logContent": "2025-05-17T09:55:00 INFO payment-service Response Time: 800 ms\n2025-05-17T09:56:00 WARNING payment-service High CPU usage\n2025-05-17T09:57:00 INFO payment-service Response Time: 1100 ms\n2025-05-17T09:57:30 WARNING payment-service Slow database query\n2025-05-17T09:58:00 ERROR order-service Transaction failed: timeout\n2025-05-17T09:58:30 WARNING payment-service Memory threshold reached\n2025-05-17T09:59:00 WARNING payment-service Cache overflow\n2025-05-17T10:00:00 INFO payment-service Response Time: 1500 ms\n2025-05-17T10:01:00 INFO order-service Response Time: 600 ms\n2025-05-17T10:02:00 ERROR payment-service Payment gateway unreachable\n2025-05-17T10:03:00 INFO payment-service Response Time: 300 ms\n2025-05-17T10:04:00 WARNING order-service High retry count\n2025-05-17T10:05:00 WARNING order-service Database lag detected\n2025-05-17T10:06:00 WARNING order-service Server overload\n2025-05-17T10:07:00 INFO order-service Response Time: 2000 ms\n2025-05-17T10:08:00 INFO payment-service Response Time: 950 ms\n2025-05-17T10:09:00 ERROR payment-service Timeout during API call\n2025-05-17T10:10:00 WARNING payment-service Queue backlog increasing\n"
    }
};

/*
Your task it's to write a function that processes and analyzes these logs to extract useful insights:

1. Create a function "analyzeLogs(logsSample)" that returns and object like this : 
{
  "alerts": [ ... ],
  "metrics": { ... }
}


Where the rules for creating an alert are:
* When a log entry has a level of ERROR, create an alert.
* When the response time in the message exceeds 1000 ms, create an alert with that message.
* When there are 3 warnings from the same service within a 5 minute window, create an alert.


Where the metrics should include:
"metrics": {
  "order-service": { "errorCount": 0, "averageResponseTime": 0, "alertsGenerated": 0 },
  "payment-service": { "errorCount": 0, "averageResponseTime": 0, "alertsGenerated": 0 }
}
*/


class Alert {
    constructor(service, reason, timestamp, level, message) {
        this.service = service;
        this.reason = reason;
        this.timestamp = timestamp;
        this.level = level;
        this.message = message;
    }
}


function analyzeLogs(input) {
    const logText = input.body.logContent.trim(); // string
    const logLines = logText.split('\n'); // array of strings
    const logs = logLines.map(line => { // array of objects JSON parsed
        const [timestamp, level, service, ...messageParts] = line.split(' ');
        const message = messageParts.join(' ');
        return { timestamp, level, service, message };
    });
    /*[
        {timestamp: '2025-05-17T10:00:00', level: 'warning', service: 'payment-service', message: 'High CPU usage'}
        {timestamp: '2025-05-17T10:01:00', level: 'error', service: 'order-service', message: 'Transaction Failed: timeout'}
        {timestamp: '2025-05-17T10:02:00', level: 'info', service: 'payment-service', message: 'Response Time: 200 ms'}
        {timestamp: '2025-05-17T10:03:00', level: 'info', service: 'payment-service', message: 'Response Time: 1200 ms'}
        {timestamp: '2025-05-17T10:05:00', level: 'warning', service: 'payment-service', message: 'Database timeout'}
    ]*/
    const alerts = []; // worst case SC O(n) -> n = number of logs
    const metrics = {}; // SC O(m) -> m = number of services
    const windowWarnings = {};

    // TC O(n) -> n = number of logs
    logs.forEach(log => {
        // Destructuring
        const { timestamp, level, service, message } = log;
        const time = new Date(timestamp).getTime(); // miliseconds

        // Initialize metrics for the service if not already present
        if (!metrics[service]) metrics[service] = { errors: 0, responseSum: 0, responseCount: 0, alertsGenerated: 0 };

        // RULE 1: Alert for error level logs
        if (level === 'ERROR') {
            alerts.push(new Alert(service, `Log level is ${level}`, timestamp, level, message));
            metrics[service].alertsGenerated++;
            metrics[service].errors++;
        }

        // RULE 2: Alert for high latency
        const responseTimeMatch = message.match(/Response Time: (\d+) ms/);
        if (responseTimeMatch) {
            const responseTime = parseInt(responseTimeMatch[1]);
            metrics[service].responseSum += responseTime;
            metrics[service].responseCount++;
            if (responseTime > 1000) {
                alerts.push(new Alert(service, `High Response Time: ${responseTime} ms`, timestamp, level, message));
                metrics[service].alertsGenerated++;
            }
        }

        // Rule 3: Alert for 3 logs from the same service within a 5 minute window
        if (level === 'WARNING') {
            if (!windowWarnings[service]) windowWarnings[service] = [];
            windowWarnings[service].push(time);

            // Remove timestamps older than 5 minutes
            const cutoff = time - 5 * 60 * 1000; // lowest allowed timestamp in the window, 5 minutes ago the current log
            windowWarnings[service] = windowWarnings[service].filter(t => t >= cutoff);

            if (windowWarnings[service].length >= 3) {
                alerts.push(new Alert(service, `3 logs within 5 minutes`, timestamp, level, message));
                // Clear the timestamps to avoid duplicate alerts
                windowWarnings[service] = [];
            }
        }

    });

    for (const service in metrics) {
        const m = metrics[service];
        m.averageResponseTime = m.responseCount ? m.responseSum / m.responseCount : 0;
        delete m.responseSum;
        delete m.responseCount;
    }

    return { alerts, metrics };
}

console.log(analyzeLogs(input));


/*
The algorithm runs in O(N) time and O(N) space, since we iterate through 
the logs once and only store limited information per service 
(alerts, metrics, and small sliding windows).
*/