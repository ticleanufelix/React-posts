# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

react-posts
//creat aplicatie care se conecteaza la un endpoint
//se autorizeaza
//se redirecteaza pe app noastra unde se vad 10 postari
folosim clerk(https://clerk.com/) si materialui (https://mui.com/)
datele le luam din dummyjson.com/docs/posts

Cleanup new vite install:
din SRC:
delete ASSETS/_._
delete App.css

din app.jsx
stergem logourile si importul de app.css
stergem codul si lasam "fragmentul" <></>

REACT esta SPA (Single page application). Exista cateva librarii de REACT care dau "senzatia" ca exista mai multe pagini dar de fapt se randeaza componenta care se cheama pe o anumita ruta (pagina)
in general in main.jsx punem componente de REACT care se numesc "provider"
in app.jsx avem aplicatia noastra. Tot aici punem rute (e.g. https://reactrouter.com/en/main)

-ne facem cont la clerk.com (or sign with github, gmail)
appname:react-posts
debifam logarea cu mail, etc si lasam github ->create application->selectare react
in folderul depe VScode creem fisierul ".env" in care punem cheia de pe clerk-> punem in fata cheii (VITE\_... fara backslash)

install in proiect:
npm install @clerk/clerk-react

din documentatie trebuie adus importul cheii.
add import { ClerkProvider } from "@clerk/clerk-react"; in app.jsx
intr-o app pornita cu vite env variables se importa cu "import.meta" in loc de "process". El cauta automat variabila in fisierul .env
verificare existenta cheie
add in return function clerkProvider tag code:
return (
<ClerkProvider publishableKey={clerkPubKey}>

<div>Hello from clerk</div>
</ClerkProvider>
);

Protecting your pages
aducem codul de SIgnin, SignOut,SignInButton,SignOutButton din documentatia lor si cu control+space la sfarsitul componentei se face importul in VScode

Steps:

- autorizare la endpoint
- requesturi de postari
- creaza ruta postari (?)
- afisare postari
- functionalitate pentru aducere urmatoarele X postari
