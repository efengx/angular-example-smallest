# README
angular6

### setup and build (development tools: WebStorm)
```text
npm i
npm run build
```

### ng command
```text
ng g component my-new-component
ng d directive my-new-directive
ng g pipe my-new-pipe
ng g service my-new-service
ng g class my-new-class
ng g interface my-new-interface
ng g enum my-new-enum
ng g module my-module
ng update
```

### file structure
```text
|--src             // root
|--|--app          // component
|--|--assect       // resource
|--|--main.ts      // main configuration file
|--|--index.html 
|--|--styles.scss 
|--|--test.ts
|--dist            // Compiled code
```

### demo
```text
http://localhost:4200/demo/dashboard
http://localhost:4200/demo/navigation
http://localhost:4200/demo/table
```

### documents
```text
https://angular.io/guide/quickstart
```

- angular material document
```text
https://angular.io/
https://material.angular.io/
https://github.com/angular/material2
```

- 约定
1. 所有的显示/页面组件，让如app/component目录
2. 所有的数据操作在service中实现
3. 所有的对象在entity目录中创建
4. service按照资源类型进行创建
