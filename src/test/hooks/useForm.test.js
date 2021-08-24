import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../Hooks/useForm";
describe("Testing on useForm custom hook", () => {
  const initialForm = {
    name: "Javier",
    email: "javier.robleslarios@gmail.com",
  };

  test("should return a  default form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("should change the value of the form (change name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Frank",
        },
      });
    });
    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, name: "Frank" }); // here the propertie name is implicit in the name since is repeated
  });

  test("should reset the form whit RESET", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Frank",
        },
      });
      reset();
    });
    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
