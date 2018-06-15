# session-storage-sync
Sync local and session storage across browser tabs from the same origin.  

* ```Typescript``` friendly, no @types required
* built for ```amd``` module loader

**BUILDING**

1. clone the repo
2. npm install -g typescript
3. $ tsc  
    * modify the ```module``` option to support whatever module loader you desire

**USAGE**

This module is to be used in place of using ```window.sessionStorage```

```javascript
    import {Storage} from 'session-storage-sync';

    const storage = new Storage();
    storage.session.set('hello', 'world'); //will sync across all open tabs from the same origin

```