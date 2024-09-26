# coja5_1

|라이프사이클 훅|호출시점|
|----|----|
|beforeCreate()|**초기화되고** 데이터, 이벤트가 설정되기 전|
|create()|**생성된 직후**, 데이터와 이벤트가 설정됨.<br>DOM에 접근할 수 없다.|
|beforeMount()|인스턴스가 **마운트 되기 전**<br>브라우저에 나오기 전|
|mounted()|인스턴스가 **마운트 된 후**<br> DOM에 접근할 수 있다.|
|beforeUpdate()|DOM이 **갱신이 되기 전**|
|update()|DOM이 **갱신이 된 후**|
|beforeDistroy()|웹 브라우저에 **제거되기 전**|
|distroyed()|웹 브라우저에 **제거된 후**|

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
