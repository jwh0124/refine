import { CssBaseline, GlobalStyles } from "@mui/material";
import { Refine } from "@refinedev/core";

import { MuiInferencer } from "@refinedev/inferencer/mui";
import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayout,
} from "@refinedev/mui";

import routerBindings, {
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { Header } from "components";
import { Title } from "components/title";
import { ColorModeContextProvider } from "contexts/color-mode";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import TopicIcon from "@mui/icons-material/Topic";

function App() {
  return (
    <BrowserRouter>
      <ColorModeContextProvider>
        <CssBaseline />
        <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
        <RefineSnackbarProvider>
          <Refine
            routerProvider={routerBindings}
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            notificationProvider={notificationProvider}
            resources={[
              {
                name: "blog_posts",
                list: "/blog-posts",
                show: "/blog-posts/show/:id",
                create: "/blog-posts/create",
                edit: "/blog-posts/edit/:id",
                meta: {
                  label: "Blog Posts",
                  icon: <NoteAltIcon />,
                },
              },
              {
                name: "topics",
                list: "/topics",
                show: "/topics/show/:id",
                create: "/topics/create",
                edit: "/topics/edit/:id",
                meta: {
                  label: "Topic",
                  icon: <TopicIcon />,
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
                  <ThemedLayout Header={Header} Title={Title}>
                    <Outlet />
                  </ThemedLayout>
                }
              >
                <Route
                  index
                  element={<NavigateToResource resource="blog_posts" />}
                />
                <Route path="blog-posts">
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
                <Route
                  index
                  element={<NavigateToResource resource="topics" />}
                />
                <Route path="topics">
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
