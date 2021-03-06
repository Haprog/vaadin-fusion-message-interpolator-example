# Validation Message Interpolation Example

Example project to test `interpolateMessageCallback` API (`@vaadin/form` 0.0.16+).

## Files of interest:

- `src/main/java/com/example/application/data/entity/ValidationTestEntity.java` (for validation annotation configuration, e.g. custom messages)
- `frontend/index.ts` (setup of Binder.interpolateMessageCallback and configuration of message localizations)
- `frontend/localization.ts` (custom MessageInterpolator implementation for easy use of interpolateMessageCallback API with additional features)

## Initial setup to use locally linked version of @vaadin/form

**NOTE: This step is NOT NEEDED anymore when using V23.0.0.alpha1 (or later)**

1. Make sure you have npm and pnpm installed globally 
1. Have a local clone of `fusion` repository ready and checked out from tag `0.0.16` (or up to date `main` branch).
1. In fusion repo:
   1. Clear `node_modules` and package lock files from `fusion`.
   1. Build and link `form` package to pnpm global packages:  
      `npm i && npm run build && pushd packages/ts/form && pnpm link --global && popd`
1. In this project repo:
   1. First try to start the project using `./mvnw` to let Vaadin generate frontend stuff. Then exit the app.
   1. Link `form` package from global pnpm packages `pnpm link --global @vaadin/form`
   1. Run normally `./mvnw` and it should be using your local version of `@vaadin/form`.
1. (optional) If you make changes to the `form` package in your local clone of the `fusion` repo you need to rebuild it to make the changes available for projects using the locally linked version. In this case it should be enough to just run `npm run build` in `fusion` repo.




## Running the application

The project is a standard Maven project. To run it from the command line,
type `mvnw` (Windows), or `./mvnw` (Mac & Linux), then open
http://localhost:8080 in your browser.

You can also import the project to your IDE of choice as you would with any
Maven project. Read more on [how to import Vaadin projects to different 
IDEs](https://vaadin.com/docs/latest/flow/guide/step-by-step/importing) (Eclipse, IntelliJ IDEA, NetBeans, and VS Code).

## Deploying to Production

To create a production build, call `mvnw clean package -Pproduction` (Windows),
or `./mvnw clean package -Pproduction` (Mac & Linux).
This will build a JAR file with all the dependencies and front-end resources,
ready to be deployed. The file can be found in the `target` folder after the build completes.

Once the JAR file is built, you can run it using
`java -jar target/myapp-1.0-SNAPSHOT.jar` (NOTE, replace
`myapp-1.0-SNAPSHOT.jar` with the name of your jar).

## Project structure

<table style="width:100%; text-align: left;">
  <tr><th>Directory</th><th>Description</th></tr>
  <tr><td><code>frontend/</code></td><td>Client-side source directory</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>index.html</code></td><td>HTML template</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>index.ts</code></td><td>Frontend entrypoint, contains the client-side routing setup using <a href="https://vaadin.com/router">Vaadin Router</a></td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>main-layout.ts</code></td><td>Main layout Web Component, contains the navigation menu, uses <a href="https://vaadin.com/components/vaadin-app-layout">App Layout</a></td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>views/</code></td><td>UI views Web Components (TypeScript)</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>themes/</code></td><td>Custom  
CSS styles</td></tr>
  <tr><td><code>src/main/java/&lt;groupId&gt;/</code></td><td>Server-side 
source directory, contains the server-side Java views</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>Application.java</code></td><td>Server entry-point</td></tr>
</table>

## Useful links

- Read the documentation at [vaadin.com/docs](https://vaadin.com/docs/latest/).
- Create new projects at [start.vaadin.com](https://start.vaadin.com/).
- Search UI components and their usage examples at [vaadin.com/components](https://vaadin.com/components).
- Discover Vaadin's set of CSS utility classes that enable building any UI without custom CSS in the [docs](https://vaadin.com/docs/latest/ds/foundation/utility-classes).
- Find a collection of solutions to common use cases in [Vaadin Cookbook](https://cookbook.vaadin.com/).
- Find Add-ons at [vaadin.com/directory](https://vaadin.com/directory).
- Ask questions on [Stack Overflow](https://stackoverflow.com/questions/tagged/vaadin) or join our [Discord channel](https://discord.gg/MYFq5RTbBn).
- Report issues, create pull requests in [GitHub](https://github.com/vaadin/platform).
