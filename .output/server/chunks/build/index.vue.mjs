import { mergeProps, useSSRContext, withCtx, createTextVNode, ref, computed, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';

const _sfc_main$2 = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "digit"
    },
    span: Number
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["calculator-button", [
          __props.type ? `calculator-button--${__props.type}` : "",
          __props.span ? `calculator-button--span-${__props.span}` : ""
        ]]
      }, _attrs))} data-v-6cf525fa>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6cf525fa"]]);

const _sfc_main$1 = {
  __name: "KeyPad",
  __ssrInlineRender: true,
  emits: [
    "digit",
    "operator",
    "clear",
    "toggle-sign",
    "percentage",
    "decimal",
    "calculate"
  ],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "keypad" }, _attrs))} data-v-d557ac17>`);
      _push(ssrRenderComponent(Button, {
        type: "function",
        onClick: ($event) => _ctx.$emit("clear")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`AC`);
          } else {
            return [
              createTextVNode("AC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        type: "function",
        onClick: ($event) => _ctx.$emit("toggle-sign")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`±`);
          } else {
            return [
              createTextVNode("±")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        type: "function",
        onClick: ($event) => _ctx.$emit("percentage")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`%`);
          } else {
            return [
              createTextVNode("%")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        type: "operator",
        onClick: ($event) => _ctx.$emit("operator", "÷")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`÷`);
          } else {
            return [
              createTextVNode("÷")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        onClick: ($event) => _ctx.$emit("digit", "7")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`7`);
          } else {
            return [
              createTextVNode("7")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        onClick: ($event) => _ctx.$emit("digit", "8")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`8`);
          } else {
            return [
              createTextVNode("8")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        onClick: ($event) => _ctx.$emit("digit", "9")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`9`);
          } else {
            return [
              createTextVNode("9")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        type: "operator",
        onClick: ($event) => _ctx.$emit("operator", "×")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`×`);
          } else {
            return [
              createTextVNode("×")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        onClick: ($event) => _ctx.$emit("digit", "4")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`4`);
          } else {
            return [
              createTextVNode("4")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        onClick: ($event) => _ctx.$emit("digit", "5")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`5`);
          } else {
            return [
              createTextVNode("5")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        onClick: ($event) => _ctx.$emit("digit", "6")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`6`);
          } else {
            return [
              createTextVNode("6")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        type: "operator",
        onClick: ($event) => _ctx.$emit("operator", "-")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`-`);
          } else {
            return [
              createTextVNode("-")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        onClick: ($event) => _ctx.$emit("digit", "1")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`1`);
          } else {
            return [
              createTextVNode("1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        onClick: ($event) => _ctx.$emit("digit", "2")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`2`);
          } else {
            return [
              createTextVNode("2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        onClick: ($event) => _ctx.$emit("digit", "3")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`3`);
          } else {
            return [
              createTextVNode("3")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        type: "operator",
        onClick: ($event) => _ctx.$emit("operator", "+")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+`);
          } else {
            return [
              createTextVNode("+")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        onClick: ($event) => _ctx.$emit("digit", "0"),
        span: 2
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`0`);
          } else {
            return [
              createTextVNode("0")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        onClick: ($event) => _ctx.$emit("decimal")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`.`);
          } else {
            return [
              createTextVNode(".")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Button, {
        type: "equal",
        onClick: ($event) => _ctx.$emit("calculate")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`=`);
          } else {
            return [
              createTextVNode("=")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/KeyPad.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d557ac17"]]);

function useCalculator() {
  const state = ref({
    currentValue: "0",
    previousValue: "",
    operator: null,
    waitingForOperand: false
  });
  const clearAll = () => {
    state.value = {
      currentValue: "0",
      previousValue: "",
      operator: null,
      waitingForOperand: false
    };
  };
  const clearEntry = () => {
    state.value.currentValue = "0";
  };
  const inputDigit = (digit) => {
    const { currentValue, waitingForOperand } = state.value;
    if (waitingForOperand) {
      state.value.currentValue = digit;
      state.value.waitingForOperand = false;
    } else {
      state.value.currentValue = currentValue === "0" ? digit : currentValue + digit;
    }
  };
  const inputDecimal = () => {
    const { currentValue, waitingForOperand } = state.value;
    if (waitingForOperand) {
      state.value.currentValue = "0.";
      state.value.waitingForOperand = false;
      return;
    }
    if (!currentValue.includes(".")) {
      state.value.currentValue = currentValue + ".";
    }
  };
  const toggleSign = () => {
    const { currentValue } = state.value;
    state.value.currentValue = currentValue.charAt(0) === "-" ? currentValue.substring(1) : "-" + currentValue;
  };
  const percentage = () => {
    const { currentValue } = state.value;
    const value = parseFloat(currentValue);
    state.value.currentValue = String(value / 100);
  };
  const performCalculation = (operator, firstOperand, secondOperand) => {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "×":
        return firstOperand * secondOperand;
      case "÷":
        return secondOperand !== 0 ? firstOperand / secondOperand : NaN;
      default:
        return secondOperand;
    }
  };
  const handleOperator = (nextOperator) => {
    const { currentValue, previousValue, operator } = state.value;
    const inputValue = parseFloat(currentValue);
    if (previousValue === "" && !isNaN(inputValue)) {
      state.value.previousValue = currentValue;
    } else if (operator) {
      const result = performCalculation(
        operator,
        parseFloat(previousValue),
        inputValue
      );
      state.value.currentValue = String(result);
      state.value.previousValue = String(result);
    }
    state.value.waitingForOperand = true;
    state.value.operator = nextOperator;
  };
  const calculateResult = () => {
    const { currentValue, previousValue, operator } = state.value;
    if (!operator || previousValue === "") {
      return;
    }
    const result = performCalculation(
      operator,
      parseFloat(previousValue),
      parseFloat(currentValue)
    );
    if (isNaN(result)) {
      state.value.currentValue = "Error";
    } else {
      state.value.currentValue = String(result);
    }
    state.value.previousValue = "";
    state.value.operator = null;
    state.value.waitingForOperand = true;
  };
  const displayValue = computed(() => state.value.currentValue);
  const operationDisplay = computed(() => {
    const { previousValue, operator } = state.value;
    return previousValue && operator ? `${previousValue} ${operator}` : "";
  });
  return {
    state,
    displayValue,
    operationDisplay,
    clearAll,
    clearEntry,
    inputDigit,
    inputDecimal,
    toggleSign,
    percentage,
    handleOperator,
    calculateResult
  };
}

/* empty css            */
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      displayValue,
      operationDisplay,
      clearAll,
      inputDigit,
      inputDecimal,
      toggleSign,
      percentage,
      handleOperator,
      calculateResult
    } = useCalculator();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_KeyPad = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "calculator-container" }, _attrs))}><div class="calculator"><div class="display"><div class="operation">${ssrInterpolate(unref(operationDisplay))}</div><div class="result">${ssrInterpolate(unref(displayValue))}</div></div>`);
      _push(ssrRenderComponent(_component_KeyPad, {
        onDigit: unref(inputDigit),
        onOperator: unref(handleOperator),
        onClear: unref(clearAll),
        onToggleSign: unref(toggleSign),
        onPercentage: unref(percentage),
        onDecimal: unref(inputDecimal),
        onCalculate: unref(calculateResult)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
