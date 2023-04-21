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
import { Title } from "components/title";
import { ColorModeContextProvider } from "contexts/color-mode";
import { TagList } from "pages/tags";
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
            dataProvider={dataProvider("/api")}
            // dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            notificationProvider={notificationProvider}
            resources={[
              // {
              //   name: "blog_posts",
              //   list: "/blog-posts",
              //   show: "/blog-posts/show/:id",
              //   create: "/blog-posts/create",
              //   edit: "/blog-posts/edit/:id",
              // },
              {
                name: "tags",
                list: "/tags",
                show: "/tags/show/:id",
                create: "/tags/create",
                edit: "/tags/edit/:id",
                meta: {
                  label: "Tags",
                  icon: <NoteAltIcon />,
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
                  parent: "tags",
                  canDelete: true,
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
                {/* <Route
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
                </Route> */}
                <Route index element={<NavigateToResource resource="tags" />} />
                <Route path="tags">
                  <Route index element={<TagList />} />
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
