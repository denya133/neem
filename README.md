neem
====

Node, express, ember and mongoose boilerplate

This is a very simple little boilerplate with an express auth api (Bearer stragegy), and client side auth.
It borrows HEAVILY from [The MEAN stack](https://github.com/linnovate/mean) and uses the code exmaples from [Eric Berry's blog post on Ember authentication](http://coderberry.me/blog/2013/07/08/authentication-with-emberjs-part-2/)

## Get Going

You'll need [node](http://nodejs.org/). 

Once you've got node, you've got node's pacakge manager npm!

So you can install mongodb:

    npm install mongodb -g
    
and run your DB server

    mongod
    
Install ember-tools

    npm install ember-tools -g
    
Install grunt

    npm install grunt -g
    
Make sure all the dependencies are installed / up-to-date

    npm install
    
and start grunt

    grunt
    
    
http://lvh.me:3000
    
This boilerplate takes MEAN's grunt file and simply adds ember-tools' build command to it (among other little changes).

Changes to the app directory will restart the server, changes to the public js directory will refresh your ember build, changes to the assets/sass directory will refresh public/application.css

Simples!
