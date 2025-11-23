# 🚀 Comandos Rápidos para Despliegue

## ✅ Build Exitoso
El proyecto compila correctamente. Todas las páginas generadas:
- `/` (Home)
- `/about` (Sobre Mí)
- `/contact` ✨ **NUEVA**
- `/projects` (Lista proyectos)
- `/projects/[slug]` (3 proyectos individuales)
- `/sitemap.xml` ✅ **ACTUALIZADO**
- `/robots.txt` ✅

---

## 📋 Comandos para Subir a GitHub

### Primera vez (sin Git)
```powershell
# 1. Inicializar Git
git init

# 2. Agregar archivos
git add .

# 3. Commit inicial
git commit -m "Portfolio completo - Alcides Ruiz Hanco - Lab14"

# 4. Crear repo en GitHub: https://github.com/new
# Nombre sugerido: portfolio-alcides

# 5. Conectar y subir (REEMPLAZA tu_usuario)
git remote add origin https://github.com/tu_usuario/portfolio-alcides.git
git branch -M main
git push -u origin main
```

### Ya tienes Git configurado
```powershell
git add .
git commit -m "Agregada página de contacto y SEO completo"
git push
```

---

## 🌐 Despliegue en Vercel - Pasos Rápidos

### 1. Acceder a Vercel
- URL: https://vercel.com/signup
- Login con GitHub (recomendado)

### 2. Importar Proyecto
1. Click "Add New..." → "Project"
2. Busca tu repo `portfolio-alcides`
3. Click "Import"

### 3. Configurar (Auto-detecta Next.js)
- Framework: **Next.js** ✅
- Root Directory: `./`
- Build Command: `npm run build` ✅
- Output Directory: `.next` ✅

### 4. Deploy
- Click **"Deploy"**
- Espera 2-3 minutos ⏱️
- ¡Listo! 🎉

---

## 🔗 Obtener Dominio

### Opción 1: Vercel (Inmediato - RECOMENDADO)
Tu URL será: `https://portfolio-alcides-tu-usuario.vercel.app`

**Personalizar:**
1. Proyecto en Vercel → Settings → Domains
2. Edit domain → Cambiar a: `alcides-ruiz-portfolio.vercel.app`

### Opción 2: Dominio Gratis .me (Estudiantes)
1. Solicita GitHub Student Pack: https://education.github.com/pack
2. Incluye dominio .me GRATIS por 1 año
3. Una vez aprobado, registra: `alcidesruiz.me`
4. Conecta en Vercel → Settings → Domains → Add

### Opción 3: Freenom (Gratis)
1. Registra en: https://freenom.com
2. Busca dominio (.tk, .ml, .ga): `alcidesportfolio.tk`
3. Registra gratis (12 meses)
4. Conecta DNS a Vercel

---

## 🔄 Actualizar URL Después del Deploy

```typescript
// src/lib/data.ts - Línea 42
export const personalInfo = {
  // ... otros campos
  siteUrl: 'https://tu-dominio-real.vercel.app', // ← CAMBIAR AQUÍ
};
```

Luego:
```powershell
git add src/lib/data.ts
git commit -m "Actualizada siteUrl con dominio de producción"
git push
```

Vercel redesplegará automáticamente en ~1 minuto.

---

## ✅ Checklist de Entrega

**Completados:**
- [x] Página de contacto con formulario
- [x] sitemap.xml actualizado con /contact
- [x] robots.txt configurado
- [x] Build exitoso (npm run build)
- [x] SEO optimizado (metadata, og tags)
- [x] Responsive design

**Por hacer:**
- [ ] Subir código a GitHub
- [ ] Desplegar en Vercel
- [ ] Obtener y configurar dominio
- [ ] Actualizar siteUrl
- [ ] Ejecutar Lighthouse Audit (Score > 90)
- [ ] Tomar screenshots para documentación

---

## 📧 Datos del Proyecto

**Estudiante:** Alcides Jesus Ruiz Hanco  
**Ciclo:** 5to - Diseño y Desarrollo de Software  
**Curso:** Desarrollo de Aplicaciones Web Avanzado  
**Lab:** 14 - Portfolio con SEO  
**Institución:** Tecsup  

---

## 🎯 URLs de Prueba Post-Deploy

Verifica estas URLs después del despliegue:
- `https://tu-dominio.vercel.app/`
- `https://tu-dominio.vercel.app/about`
- `https://tu-dominio.vercel.app/projects`
- `https://tu-dominio.vercel.app/contact` ✨
- `https://tu-dominio.vercel.app/sitemap.xml`
- `https://tu-dominio.vercel.app/robots.txt`

---

## 💡 Consejos Finales

1. **Email real**: Actualiza `email` en `data.ts` con tu email Tecsup
2. **GitHub**: Usa tu usuario real de GitHub en los enlaces
3. **LinkedIn**: Si tienes, actualiza el link
4. **Screenshots**: Toma capturas de cada página para tu reporte
5. **Lighthouse**: Ejecuta audit en modo Incógnito para mejores scores

---

## 🆘 Ayuda Rápida

**Error en build?**
```powershell
npm install
npm run build
```

**Git no funciona?**
```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

**Vercel no despliega?**
- Verifica que el repo sea público en GitHub
- Revisa los logs en Vercel Dashboard

---

¡Todo listo para el despliegue! 🚀
