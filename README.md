# nginx_docker_loadbalancing
This is a demo for setting up a NGINX as load balancer for web apis powered by Docker, as an exemple i used fastify nodejs http server but we can use any other technology/api

## Running the containers

### Prerequisite : 
- you need `docker-compose` installed on your machine

### Instructions :
- first we need to clone the repo :  
`git clone https://github.com/firasjaber/nginx_docker_loadbalancing.git demo`
- then simply start the container by using :   
`docker-compose up`

### Result :
Now we can open localhost:80 on the browser or use curl to test this out.
We see that NGINX is using round-robin method to proxy requests to the different instances of our API correctly.  

![Result](https://i.imgur.com/33TOlbX.gif)

