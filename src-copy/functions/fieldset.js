import { createInput } from "./createInputElement";
import { typeArr } from "./assistantArr";

export function createFieldSet() {
  const parent = document.querySelector("fieldset");

  const assistants = typeArr;
  assistants.forEach((assistant) => {
    parent.appendChild(createInput(assistant.type, assistant.title));
  });
}
