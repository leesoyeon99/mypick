# GitHub Pages 설정 가이드

## ✅ 현재 설정 상태

- [x] `docs/index.html` 존재 및 커밋됨
- [x] `docs/.nojekyll` 파일 존재 (Jekyll 비활성화)
- [x] `docs/404.html` 존재 (React Router 지원)
- [x] 리소스 경로: 상대 경로 (`./assets/...`)
- [x] `main` 브랜치에 `docs` 폴더 커밋됨

## 🔧 GitHub에서 해야 할 설정

### 1. 저장소가 Public인지 확인
- Settings → General → Danger Zone에서 Public 확인
- GitHub Pages는 Public 저장소에서 무료로 사용 가능

### 2. Pages 설정

**Settings → Pages** 에서:

1. **Build and deployment**
   - Source: **Deploy from a branch** 선택
   
2. **Branch 설정**
   - Branch: **`main`** 선택
   - Folder: **`/docs`** 선택
   
3. **Save** 클릭

### 3. HTTPS 강제 설정 (권장)

**Settings → Pages** 하단에서:
- ☑️ **Enforce HTTPS** 체크

### 4. 배포 확인

설정 후 몇 분 내에:
- 배포 상태: Settings → Pages에서 "Your site is live at..." 메시지 확인
- 사이트 주소: `https://leesoyeon99.github.io/mypick/`

## 🚀 배포 업데이트 방법

코드를 수정한 후:

```bash
# 1. 빌드
npm run deploy

# 2. 커밋 및 푸시
git add .
git commit -m "Update"
git push
```

GitHub Pages는 자동으로 재배포됩니다 (몇 분 소요).

## ❌ 문제 해결

### 배포 실패 시 체크리스트

- [ ] Settings → Pages에서 Branch = `main`, Folder = `/docs`인지 확인
- [ ] `docs` 폴더가 `main` 브랜치에 커밋되어 있는지 확인
- [ ] `docs/.nojekyll` 파일이 존재하는지 확인
- [ ] `docs/index.html`이 존재하는지 확인
- [ ] 리소스 경로가 상대 경로 (`./assets/...`)인지 확인

### 자주 발생하는 오류

**오류: "No such file or directory ... /docs"**
- 해결: Settings → Pages에서 Branch를 `main`, Folder를 `/docs`로 설정

**오류: "404 Not Found"**
- 해결: `docs/404.html` 파일 확인 및 `docs/.nojekyll` 파일 존재 확인

**스타일/CSS가 로드되지 않음**
- 해결: `docs/index.html`에서 리소스 경로가 상대 경로 (`./assets/...`)인지 확인

