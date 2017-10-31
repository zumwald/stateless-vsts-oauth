# stateless-vsts-oauth
Stateless Oauth callback service which allows developers to obtain tokens for VSTS operations.

> note: [invaluable resource by howlowck](https://blog.lifeishao.com/2017/03/24/custom-nodejs-deployment-on-azure-web-app/) which informs many of the "azure-isms" in the app such as specifying the start script (general good practice) and engines field (not so common practice :P)  

## Deployment and hosting
This service is hosted and available for use at https://stateless-vsts-oauth.azurewebsites.net free of charge. There are no guaruntees made for service availability, functionality, or otherwise. The app is configured for [Azure Continuous Deployment](https://docs.microsoft.com/en-us/azure/app-service/app-service-continuous-deployment) from the `master` branch of this repository.

## Related projects
If you're looking for a solution to seamlessly handle authentication for your NPM feeds in VSTS, check out [better-vsts-npm-auth](https://github.com/zumwald/better-vsts-npm-auth).