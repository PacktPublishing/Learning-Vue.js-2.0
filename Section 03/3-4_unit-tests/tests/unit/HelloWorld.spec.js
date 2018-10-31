import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: msg }
    });
    expect(wrapper.text()).to.include(msg);
  });

  it("has a created function", () => {
    expect(HelloWorld.created).to.be.a("function");
  });
});
