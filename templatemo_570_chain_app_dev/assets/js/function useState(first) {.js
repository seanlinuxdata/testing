function useState(first) {
    let state = { state: first };
    function get() {
      return state.state;
    }
    function set(next) {
      state.state = next;
    }
    return [get, set];
  }
  
  let [getA, setA] = useState(10);
  let [getB, setB] = useState(11);
  let [getC, setC] = useState(12);
  
  console.log({ a: getA(), b: getB(), c: getC() });
  
  setA(20);
  
  console.log({ a: getA(), b: getB(), c: getC() });