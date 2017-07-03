# pmcc
对现有node的[memcache][1]库进行promise化，更方便调用

## install
```
npm install --save pmcc

//dev
npm run dev
```


## usage
```
    import Pmccer from 'pmcc';
    //初始化memcache链接
    let pmccer = new Pmccer('127.0.0.1:11211');
    //获取memcache的promise化对象
    let pmcc = pmccer.init();
    //获取memcache原生对象
    //let pmcc = pmccer.primeval();
    
    let result = await pmcc.set(key, value, lifetime);
    let value = await pmcc.get(key);
    ...
```

更多API使用可以参考原[memcache库][2]


  [1]: https://github.com/3rd-Eden/memcached
  [2]: https://github.com/3rd-Eden/memcached