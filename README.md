# Pattern Lab For Sling - demo

![Pattern Lab For Sling](https://raw.githubusercontent.com/kciecierski/patternlab-for-sling/master/img/pattern-lab-for-sling.jpg)

## Overview

This is an example Sling application codebase that can be used to demo [Pattern Lab For Sling](https://github.com/kciecierski/patternlab-for-sling)


The HTML files present in the application was created by translating Mustache templates from [original Pattern Lab demo](https://github.com/pattern-lab/patternlab-php/releases) to HTL language.

Maven configuration of the application is also integrated with Gulp front end build tool for Sass files generation on build
so this project can be used as a base for building Sling application following atomic design.

## Installation

### Requirements

* [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* [Sling 8](http://sling.apache.org/downloads.cgi) or version with Sling Models >= 1.1.0 (should be compatible with AEM >=6.1)
* [Maven 3+](http://maven.apache.org/download.cgi)

### 1. Run Sling

    java -jar org.apache.sling.launchpad-8.jar

By default, it is running on port 8080, you can change it with -p parameter:

    java -jar org.apache.sling.launchpad-8.jar -p <port>

### 2. Check out Pattern Lab For Sling code and install Pattern Lab

    mvn clean install -PautoInstallBundle

The code can be check out using this link: https://github.com/kciecierski/patternlab-for-sling.git

Optionally, you can also override default connection parameters:

    mvn clean install -PautoInstallBundle -Dsling.host=<host> -Dsling.port=<port> -Dsling.user=<user>  -Dsling.password=<password>

### 3. Check out Pattern Lab For Sling demo code and install Pattern Lab

    mvn clean install -PautoInstallBundle

Optional parameters mentioned in second point can be also applied for this build.

After installation, you can access Pattern Lab demo under this link:

    http://<sling.host>:<sling.port>/etc/pattern-lab/pattern-lab-demo.html
