 
var organization = context.getVariable("organization.name");
var environment = context.getVariable("environment.name");
var region = context.getVariable("system.region.name") || "none";
var apiProxy = context.getVariable("apiproxy.name");
var apiProxyRevision = context.getVariable("apiproxy.revision");
var requestUrl = context.getVariable("request.url");
var verb =  context.getVariable("request.verb");
var correlationId = context.getVariable("messageid");
var client_ip = context.getVariable("client.ip");
var target_ip = context.getVariable("target.ip") || "none";
var target_host = context.getVariable("target.host") || "none";
var proxyRequestReceived = context.getVariable("client.received.end.timestamp");
var proxyResponseSent = context.getVariable("client.sent.end.timestamp");
var targetResponseReceived = context.getVariable("target.received.end.timestamp") || "none";
var targetRequestSent = context.getVariable("target.sent.end.timestamp") || "none";
var targetResponseCode = context.getVariable("message.status.code") || "none";
var proxyResponseCode = context.getVariable("response.status.code") || "none";
var fault_name = context.getVariable("fault.name") || "none";


var LogRecord = {
  "organization": organization,
  "environment": environment,
  "region": region,
  "apiProxy": apiProxy,
  "apiProxyRevision": apiProxyRevision,
  "requestUrl": requestUrl,
  "verb": verb,
  "correlationId": correlationId,
  "client_ip": client_ip,
  "target_ip": target_ip, 
  "target_host": target_host, 
  "proxyRequestReceived": proxyRequestReceived,
  "proxyResponseSent": proxyResponseSent,
  "targetResponseReceived": targetResponseReceived,
  "targetRequestSent": targetRequestSent,
  "targetResponseCode": targetResponseCode,
  "proxyResponseCode": proxyResponseCode,
  "faultName": fault_name
 }

context.setVariable("gcplogging.logpayload", JSON.stringify(LogRecord));
