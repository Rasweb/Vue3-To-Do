# to-do-list

This is information from Nintendos Legend of Zelda Breath of the Wild. I don't own any of these information.

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
    TodoList
        TodoItem
            TodoDeleteButton
            TodoEditButton
    TodoFooter
        TodoClearButton
        TodoStatistic
```

### List of Objects example in vue.

```
<script>
lists: [
    {id:1, title: dave },
    {id:2, title: brad},
    {id:3, title: bob}
]
</script>

<template>
<Todo v-for="list in lists"
:key="list.id"
:title="post.title />
</template>
```

<!--
SORTS THE TODO
Todo.sort(function (a,b) {
    return a.title - b.title
})

 -->