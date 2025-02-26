import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Components } from "./pages/Components";
import { Props } from "./pages/Props";
import { VirtualDOM } from "./pages/VirtualDom";
import { State } from "./pages/State";
import { LifeCycle } from "./pages/LifeCycle";
import { Events } from "./pages/Events";
import { RefsFragmentKey } from "./pages/RefsFragmentKey";
import { Context } from "./pages/Context";
import { Forms } from "./pages/Forms";
import { Storages } from "./pages/Storages";
import { HOC } from "./pages/HOC";
import { Router } from "./pages/Router";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/virtualDom" element={<VirtualDOM />} />
      <Route path="/components" element={<Components />} />
      <Route path="/props" element={<Props />} />
      <Route path="/state" element={<State />} />
      <Route path="/lifeCycle" element={<LifeCycle />} />
      <Route path="/events" element={<Events />} />
      <Route
        path="/refs-fragment-key-reactMemo-useMemo"
        element={<RefsFragmentKey />}
      />
      <Route path="/context" element={<Context />} />
      <Route path="/react-hook-form-VS-formik" element={<Forms />} />
      <Route
        path="/local-storage-session-storage-local-forage"
        element={<Storages />}
      />
      <Route path="/higher-Order-Components" element={<HOC />} />
      <Route path="/router" element={<Router />} />
    </Routes>
  );
};
export { AppRoutes };
