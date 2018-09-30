import { mount } from "vue-test-utils";
import Counter from "../src/components/Counter.vue";
import expect from "expect"; //expect are used for assertion

describe("Counter", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Counter);
  });

  it("defaults to a count of 0", () => {
    expect(wrapper.vm.count).toBe(0);
  });

  it("increments the count when the increment button is clicked", () => {
    expect(wrapper.vm.count).toBe(0);
    wrapper.find(".increment").trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });

  it("Decrement the count when the decrement button is clicked", () => {
    expect(wrapper.vm.count).toBe(0);
    wrapper.find(".increment").trigger("click"); //1
    wrapper.find(".increment").trigger("click"); //2
    wrapper.find(".decrement").trigger("click"); //1
    expect(wrapper.vm.count).toBe(1);
  });

  it("Should not show Decrement button when its equals to 0", () => {
    expect(wrapper.vm.count).toBe(0);
    expect(wrapper.find(".decrement").hasStyle("display", "none")).toBe(true);
    wrapper.find(".increment").trigger("click");
    expect(wrapper.find(".decrement").hasStyle("display", "none")).toBe(false);
  });
});
