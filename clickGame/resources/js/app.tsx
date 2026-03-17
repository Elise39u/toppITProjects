import { createInertiaApp } from '@inertiajs/react';
import axios from "axios";
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const token = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute("content");

if (token) {
    axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
}

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
