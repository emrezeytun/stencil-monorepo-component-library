# 📦 NPM Publishing Guide - Arcadia Components

Bu kılavuz, `@arcadia-components` organizasyonu altında paketleri NPM'e nasıl yayınlayacağını açıklar.

## 🏢 NPM Organizasyonu Kurulumu

### 1. **NPM Organizasyonu Oluşturma**

1. [npmjs.com](https://www.npmjs.com)'da giriş yap
2. **Organizations** → **Create Organization** 
3. Organization adını `arcadia-components` olarak gir
4. Public/Private seçimini yap (Public öneriliyor)
5. Organizasyonu oluştur

### 2. **NPM CLI Authentication**

```bash
# NPM'e giriş yap
npm login

# Organizasyon access kontrolü
npm access list packages @arcadia-components

# Organization member kontrolü  
npm team ls @arcadia-components:developers
```

### 3. **Organizasyon Permission'ları**

Organizasyon sahibi olarak:
- Package publish yetkisi
- Member management yetkisi
- Billing access yetkisi

## 🚀 Publishing İşlemi

### Adım 1: Build ve Test

```bash
# Tüm paketleri build et
npm run build

# Testleri çalıştır (opsiyonel)
npm run test

# Linting kontrolü
npm run lint
```

### Adım 2: Version Management

```bash
# Tüm paketlerin version'ını artır
npm run version

# Veya manuel olarak:
lerna version --conventional-commits

# Patch, minor, major seçenekleri:
lerna version patch
lerna version minor  
lerna version major
```

### Adım 3: Publish

```bash
# Tüm paketleri publish et
npm run publish

# Veya manuel olarak:
lerna publish from-package

# Sadece değişen paketleri:
lerna publish from-git
```

## 🔧 Package.json Ayarları

Her pakette aşağıdaki ayarlar mevcut:

```json
{
  "name": "@arcadia-components/package-name",
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  },
  "files": [
    "dist/",
    "loader/", 
    "bindings/"
  ]
}
```

## 📁 Publish Edilecek Dosyalar

Her pakette şu dosyalar publish edilecek:

```
📦 @arcadia-components/button
├── dist/                     # Build output
├── loader/                   # Component loader
├── bindings/                 # Framework bindings
│   ├── react/
│   ├── vue/
│   └── angular/
├── package.json
└── README.md
```

## 🎯 Framework Binding Export'ları

Her pakette şu export path'leri mevcut:

```json
{
  "exports": {
    ".": "Main package",
    "./loader": "Component loader", 
    "./react": "React bindings",
    "./vue": "Vue bindings",
    "./angular": "Angular bindings"
  }
}
```

## 🚨 Publish Öncesi Kontrol Listesi

- ✅ Build başarılı
- ✅ Testler geçiyor
- ✅ Version number'lar doğru
- ✅ NPM'e giriş yapıldı
- ✅ Organizasyon permission'ları var
- ✅ CHANGELOG.md güncellendi
- ✅ Documentation güncel

## 📈 Post-Publish

### Doğrulama

```bash
# Package'ların yayınlandığını kontrol et
npm view @arcadia-components/button
npm view @arcadia-components/hello-world

# İndirilip kullanılabilirliğini test et
npm install @arcadia-components/button
```

### Installation Test

```bash
# Yeni bir test projesi oluştur
mkdir test-arcadia-components
cd test-arcadia-components
npm init -y

# Paketleri yükle ve test et
npm install @arcadia-components/button @arcadia-components/hello-world
```

## 🔍 Troubleshooting

### Yaygın Hatalar

1. **401 Unauthorized**
   ```bash
   npm login
   npm whoami
   ```

2. **403 Forbidden**
   - Organizasyon permission'larını kontrol et
   - Package name conflict kontrolü

3. **Package Not Found**
   - Registry ayarlarını kontrol et
   - Organization scope doğruluğu

### Debug Commands

```bash
# NPM config kontrolü
npm config list

# Registry kontrolü  
npm config get registry

# Authentication kontrolü
npm whoami

# Package bilgisi
npm view @arcadia-components/button

# Organization packages
npm access list packages @arcadia-components
```

## 🎉 Başarılı Publish Sonrası

Package'lar başarıyla yayınlandıktan sonra:

1. **NPM sayfasını kontrol et**: https://www.npmjs.com/package/@arcadia-components/button
2. **Documentation link'lerini güncelle**
3. **README badge'lerini ekle**
4. **CDN link'lerini test et** (unpkg, jsdelivr)
5. **GitHub releases oluştur**

## 📋 Scripts Özeti

```bash
npm run build         # Build all packages
npm run version       # Version management  
npm run publish       # Publish to NPM
npm run test          # Run tests
```
