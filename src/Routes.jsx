import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { Components } from "./pages/Components.jsx";
import { Props } from "./pages/Props.jsx";
import { VirtualDOM } from "./pages/VirtualDom.jsx";
import { State } from "./pages/State.jsx";
import { LifeCycle } from "./pages/LifeCycle.jsx";
import { Events } from "./pages/Events.jsx";
import { RefsFragmentKey } from "./pages/RefsFragmentKey.jsx";
import { Context } from "./pages/Context.jsx";
import { Forms } from "./pages/Forms.jsx";
import { Storages } from "./pages/Storages.jsx";
import { HOC } from "./pages/HOC.jsx";
import { Router } from "./pages/Router.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/react-theory" element={<Home />} />
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
