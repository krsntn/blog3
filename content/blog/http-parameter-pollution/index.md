---
title: HTTP Parameter Pollution
date: 2021-10-18T10:04:30.397Z
description: A look at HTTP Parameter Pollution (HPP)
tags:
  - security
---
HTTP Parameter Pollution (HPP) is a Web attack evasion technique that allows an attacker to craft a HTTP request in order to manipulate or retrieve hidden information. This evasion technique is based on splitting an attack vector between multiple instances of a parameter with the same name. Since none of the relevant HTTP RFCs define the semantics of HTTP parameter manipulation, each web application delivery platform may deal with it differently. In particular, some environments process such requests by concatenating the values taken from all instances of a parameter name within the request. This behavior is abused by the attacker in order to bypass pattern-based security mechanisms.

### Example

www.somewebsite.com?par1=val1&other=test**&par1=val2**

| TECHNOLOGY/HTTP BACK-END   | OVERALL PARSING RESULT                    | EXAMPLE        |
| -------------------------- | ----------------------------------------- | -------------- |
| ASP.NET/IIS                | All occurrences of the specific parameter | par1=val1,val2 |
| ASP/IIS                    | All occurrences of the specific parameter | par1=val1,val2 |
| PHP/Apache                 | Last occurrence                           | par1=val2      |
| PHP/Zeus                   | Last occurrence                           | par1=val2      |
| JSP, Servlet/Apache Tomcat | First occurrence                          | par1=val1      |