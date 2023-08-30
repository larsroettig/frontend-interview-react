# React Interview question

### What differnt between `useEffect` and `useLayoutEffect` ?

1. No differnce both works similar to componentDidMount and componentDidUpdate
2. `useLayoutEffect` get executed before v-dom is writen to dom
3. `useEffect` get executed before v-dom is writen to dom
4. `useEffect` is excuted just one componentDidMount

### For what the return of `useEffect` can be ussed

```js
useEffect(() => {
    // our nice logic.
     return () => {

      };
  }, [deps]);
```

1. Clean up automatic get call when component get unmount
2. Clean up callback what need to get called by parrent
3. Callback function what can use to execute actions

### What is the outcome of below code after button click?

```js
import { useRef } from 'react';

function MyCustomInput(props) {
  return <input {...props} />;
}

export default function MyCustomForm() {
  const inputRef = useRef(null);

  function handleInputFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyCustomInput ref={inputRef} />
      <button onClick={handleInputFocus}>
        Click Me
      </button>
    </>
  );
```

1.  Input gets the focus
2.  Warning: Function components cannot be given refs.
3.  Cannot read current property of undefined
4.  Warning: Missing ref on element

### What is "key" prop and what is the benefit of using it?

1. `Key` is a special attribute you should include when mapping over arrays to render data.
2. `Key` is needed to able to test via jest
3. `Keys` should most be **not** unique among its siblings.
4. `Key` prop helps React identify which items have changed, are added, or are removed.
