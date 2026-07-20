# cafeina.ai

La plataforma de apps con IA para Latinoamerica.

## Como desplegar en GitHub Pages

### Paso 1: Subir el codigo a GitHub

Sube TODO el contenido de este ZIP a tu repositorio `cafeina.ai` en GitHub.

**Estructura que debe quedar en el repo:**
```
cafeina.ai/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Workflow de GitHub Actions
├── public/                      ← Todas las imagenes
│   ├── CNAME
│   ├── logo-navbar.png
│   ├── nita-cafe.png
│   ├── hero-vibe.jpg
│   └── ... (todas las demas)
├── src/
│   ├── pages/
│   │   └── Home.tsx
│   ├── components/
│   ├── main.tsx
│   ├── App.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── ... (resto de configs)
```

**IMPORTANTE:** NO subas las carpetas `node_modules/` ni `dist/`.

### Paso 2: Activar GitHub Actions

1. Ve a tu repo en GitHub
2. Click en **Settings** → **Pages** (menu izquierdo)
3. En **Source** selecciona: **GitHub Actions**
4. Guarda los cambios

### Paso 3: Activar Actions (si pide confirmacion)

1. Ve a la pestana **Actions** en tu repo
2. Si aparece un boton amarillo de "Enable Actions", dale click

### Paso 4: Hacer push para ejecutar el workflow

El workflow se ejecuta automaticamente cada vez que haces push a `main`.

Para ejecutarlo manualmente la primera vez:
1. Ve a **Actions** → **Deploy to GitHub Pages**
2. Click en **Run workflow** → **Run workflow**

### Paso 5: Configurar DNS (dominio personalizado)

En tu administrador de DNS (GoDaddy, Cloudflare, etc.):

**Opcion A - Registro CNAME:**
```
Nombre: www
Valor: jvincent1811.github.io
```

**Opcion B - Registro A (raiz):**
```
Nombre: @
Valor: 185.199.108.153
Valor: 185.199.109.153
Valor: 185.199.110.153
Valor: 185.199.111.153
```

### Paso 6: Verificar en GitHub

1. Ve a **Settings** → **Pages**
2. En la seccion **Custom domain** escribe: `cafeina.ai`
3. Guarda y espera a que GitHub verifique el DNS
4. Marca **Enforce HTTPS**

### Esperar

El deploy toma ~2 minutos. El DNS puede tardar hasta 24 horas en propagarse.

Tu sitio estara en: `https://cafeina.ai`
