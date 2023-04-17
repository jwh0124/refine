import { CssBaseline, GlobalStyles } from "@mui/material";
import { Refine } from "@refinedev/core";

import { MuiInferencer } from "@refinedev/inferencer/mui";
import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayout,
  ThemedLayoutV2,
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
import { TagList } from "pages/tags";

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
                <Route path="/tags" element={<TagList />} />
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
