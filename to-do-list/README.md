# to-do-list

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Todo component tree

```
App (root component)
----TodoList
--------TodoItem
------------TodoDeleteButton
------------TodoEditButton
----TodoFooter
--------TodoClearButton
--------TodoStatistic
```

├─ TodoList
│ └─ TodoItem
│ ├─ TodoDeleteButton
│ └─ TodoEditButton
└─ TodoFooter
├─ TodoClearButton
└─ TodoStatistics
