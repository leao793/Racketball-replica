# Racketball Replica - VTEX IO

## 🚀 Descripción
Proyecto de ejemplo para montar una tienda en **VTEX IO** con un componente React personalizado.

### Estructura
- `store-theme`: tema base de la tienda
- `racketball-carousel`: app React custom (componente Carousel)

---

## 📦 Instalación y ejecución

### 1. Clonar el repo
```bash
git clone https://github.com/<tu-usuario>/racketball-replica.git
cd racketball-replica
```

### 2. Login en VTEX
```bash
vtex login <account>
vtex use dev
```

### 3. Linkear las apps
```bash
cd racketball-carousel
vtex link

cd ../store-theme
vtex link
```

### 4. Ver en navegador
```bash
vtex browse
```
Abrirá la URL: `https://dev--<account>.myvtex.com`
