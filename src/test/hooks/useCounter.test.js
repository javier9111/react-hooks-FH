import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../Hooks/useCounter";

describe("Test on UseCounter", () => {
  test("should  return default values", () => {
    const { result } = renderHook(() => useCounter());

    // console.log(result.current); // this will print the current hook use in this case will show the object created with functions in it.

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });
  test("should  return the conter 100", () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  test("should increment the counter on 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    //this act function will help to execute the function increment
    act(() => {
      increment();
    });
    expect(result.current.counter).toBe(101);
  });
  test("should decrement the counter on 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    //this act function will help to execute the function increment
    act(() => {
      decrement();
    });
    expect(result.current.counter).toBe(99);
  });
  test("should reset the counter to the default value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;

    //this act function will help to execute the function increment
    act(() => {
      increment();
      reset();
    });
    expect(result.current.counter).toBe(100);
  });
});
