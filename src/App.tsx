import { CssBaseline, GlobalStyles } from "@mui/material";
import { Refine } from "@refinedev/core";

import { MuiInferencer } from "@refinedev/inferencer/mui";
import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayoutV2,
} from "@refinedev/mui";

import NoteAltIcon from "@mui/icons-material/NoteAlt";
import TopicIcon from "@mui/icons-material/Topic";
import routerBindings, {
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { Header } from "components";
import { mockProvider } from "components/mock/mockProvider";
import { Title } from "components/title";
import { ColorModeContextProvider } from "contexts/color-mode";
import { CompanyList } from "pages/company";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <ColorModeContextProvider>
        <CssBaseline />
        <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
        <RefineSnackbarProvider>
          <Refine
            routerProvider={routerBindings}
            dataProvider={{
              default: dataProvider("/api"),
              mock: mockProvider,
            }}
            notificationProvider={notificationProvider}
            resources={[
              {
                name: "company",
                list: "/company",
                show: "/company/show/:id",
                create: "/company/create",
                edit: "/company/edit/:id",
                meta: {
                  label: "Company",
                  icon: <NoteAltIcon />,
                  canDelete: true,
                  dataProviderName: "mock",
                },
              },
              {
                name: "replies",
                list: "/replies",
                show: "/replies/show/:id",
                create: "/replies/create",
                edit: "/replies/edit/:id",
                meta: {
                  label: "replies",
                  icon: <TopicIcon />,
                  canDelete: true,
                  // dataProviderName: "mock",
                },
              },
            ]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              reactQuery: {
                devtoolConfig: false,
              },
            }}
          >
            <Routes>
              <Route
                element={
                  <ThemedLayoutV2 Header={Header} Title={Title}>
                    <Outlet />
                  </ThemedLayoutV2>
                }
              >
                <Route
                  index
                  element={<NavigateToResource resource="company" />}
                />
                <Route path="company">
                  <Route index element={<CompanyList />} />
                  <Route
                    path="show/:id"
                    element={
                      <MuiInferencer hideCodeViewerInProduction={true} />
                    }
                  />
                  <Route
                    path="edit/:id"
                    element={
                      <MuiInferencer hideCodeViewerInProduction={true} />
                    }
                  />
                  <Route
                    path="create"
                    element={
                      <MuiInferencer hideCodeViewerInProduction={true} />
                    }
                  />
                </Route>
                <Route
                  index
                  element={<NavigateToResource resource="replies" />}
                />
                <Route path="replies">
                  <Route
                    index
                    element={
                      <MuiInferencer hideCodeViewerInProduction={true} />
                    }
                  />
                  <Route
                    path="show/:id"
                    element={
                      <MuiInferencer hideCodeViewerInProduction={true} />
                    }
                  />
                  <Route
                    path="edit/:id"
                    element={
                      <MuiInferencer hideCodeViewerInProduction={true} />
                    }
                  />
                  <Route
                    path="create"
                    element={
                      <MuiInferencer hideCodeViewerInProduction={true} />
                    }
                  />
                </Route>
                <Route path="*" element={<ErrorComponent />} />
              </Route>
            </Routes>
            <UnsavedChangesNotifier />
          </Refine>
        </RefineSnackbarProvider>
      </ColorModeContextProvider>
    </BrowserRouter>
  );
}

export default App;
