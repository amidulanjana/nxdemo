1. Create workspace
# npx create-nx-workspace

2. Create react app
# @nrwl/react
# yarn nx list @nrwl/react  
# yarn nx generate @nrwl/react:application web

3. Run
# yarn run

4. Create lib (Card component)
# yarn nx g @nrwl/react:lib ui --directory=web

5. Create component 
# yarn nx g @nrwl/react:component card --project=web-ui

6. Update UI

7. Create util shared library
# yarn nx g @nrwl/workspace:lib shared --directory=web --dry-run

8. Update tags
# update tags project.json files
# update eslint.json 

9. Show dep graph
# yarn nx dep-graph

10. Run web projects
# yarn nx run admin:serve
# yarn nx run-many --target=serve --projects=web,admin --parallel=true

11. Add storybook
# yarn add @nrwl/storybook -D
# yarn nx list @nrwl/react
# yarn nx g @nrwl/react:storybook-configuration web-ui --generateStories
# yarn nx run web-ui:storybook




