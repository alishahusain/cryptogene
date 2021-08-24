import New from "../components/New.vue";

export const routes = [
    {
        path: "",
        name: "home",
        component: () =>
            import(/* webpackChunkName: "home" */ "../components/Home.vue"),
        meta: {
            title: "All Sculptures",
        },
    },


    {
        path: "/examples",
        name: "examples",
        component: () =>
            import(
                /* webpackChunkName: "examples" */ "../components/Examples.vue"
            ),
        props: (route) => ({ embed: route.query.embed }),
        meta: {
            title: "Examples",
        },
    },


    {
        path: "/my23",
        name: "examples",
        component: () =>
            import(/* webpackChunkName: "upload" */ "../components/My23.vue"),
        props: (route) => ({ embed: route.query.embed }),
        meta: {
            title: "my23",
        },
    },
    {
        path: "/new/:type",
        name: "new",
        component: New,
        meta: {
            title: "New Sculpture",
            selectedSculpture: true,
        },
    },
    {
        path: "/new",
        name: "new",
        component: New,
        meta: {
            title: "New Sculpture",
            selectedSculpture: true,
        },
    },
    {
        path: "/sign-in",
        name: "signIn",
        component: () =>
            import(/* webpackChunkName: "signin" */ "../components/SignIn.vue"),
        meta: {
            title: "Sign In",
        },
    },
    {
        path: "/sign-up",
        name: "signUp",
        component: () =>
            import(/* webpackChunkName: "signup" */ "../components/SignUp.vue"),
        meta: {
            title: "Sign Up",
        },
    },
    {
        path: "/profile",
        name: "profile",
        component: () =>
            import(
                /* webpackChunkName: "profile" */ "../components/Profile.vue"
            ),
        meta: { title: "Profile", requiresAuth: true },
    },
    {
        path: "/featured",
        name: "featured",
        component: () =>
            import(/* webpackChunkName: "home" */ "../components/Home.vue"),
        meta: { title: "Featured", requiresAuth: false },
    },
    {
        path: "/sculpture/:id",
        name: "sculpture",
        component: New,
        props: (route) => ({
            example: route.query.example,
            embed: route.query.embed,
            hideEditor: route.query.hideeditor,
            hidePedestal: route.query.hidepedestal,
            clickEnabled: route.query.clickenabled,
        }),
        meta: {
            title: "sculpture",
            selectedSculpture: true,
        },
    },
    {
        path: "/embed/:id",
        name: "embed",
        component: New,
        props: (route) => ({
            example: route.query.example,
            embed: true,
            hideEditor: true,
            hidePedestal: true,
            clickEnabled: false,
        }),
        meta: {
            title: "embed",
            selectedSculpture: true,
        },
    },
    {
        path: "/user/:username",
        name: "user",
        component: () =>
            import(
                /* webpackChunkName: "profile" */ "../components/Profile.vue"
            ),
        meta: {
            title: "user",
        },
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import(/* webpackChunkName: "about" */ "../components/About.vue"),
        meta: { title: "About" },
    },
    {
        path: "/contact",
        name: "contact",
        component: () =>
            import(
                /* webpackChunkName: "contact" */ "../components/Contact.vue"
            ),
        meta: { title: "Contact" },
    },
    {
        path: "/start",
        name: "start",
        component: () =>
            import(/* webpackChunkName: "contact" */ "../components/Start.vue"),
        meta: { title: "Start" },
    },
    {
        path: "/404",
        name: "404",
        component: import(
            /* webpackChunkName: "error" */ "../components/Error404.vue"
        ),
    },
    { path: "*", redirect: "/404" },
];
