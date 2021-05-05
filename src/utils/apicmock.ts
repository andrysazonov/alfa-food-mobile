import MockAdapter from "axios-mock-adapter"

import { instance } from "../api";

export const mock = new MockAdapter(instance);

