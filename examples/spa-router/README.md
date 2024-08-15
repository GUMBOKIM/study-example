# gumbo-router-dom

----

### 목적
이 프로젝트를 통해서 react-router-dom의 동작을 이해하고 직접 구현해보는 것을 목적으로 합니다.

### 구조
```
gumbor-router-dom/
│
├── components/
│   ├── index.tsx
│   ├── Link.tsx           # Link 컴포넌트
│   ├── Route.tsx          # Route 컴포넌트
│   └── Router.tsx         # Router (Switch와 유사한 역할) 컴포넌트
│
├── hooks/
│   ├── index.tsx          `
│   ├── useLocation.tsx    # 현재 URL 경로를 반환하는 훅
│   ├── useParams.tsx      # URL 경로 파라미터를 반환하는 훅
│   ├── useQueryString.tsx # 쿼리 스트링을 파싱하여 객체로 반환하는 훅
│
├── utils/
│   ├── index.ts
│   └── matchPath.ts       # 경로 매칭 및 파라미터 추출을 위한 함수
│
├── RouterContext.ts       # 라우팅 상태를 관리하는 컨텍스트
├── RouterProvider.tsx     # RouterContext의 상태를 제공하는 프로바이더
├── useRouter.tsx          # 라우팅 상태를 관리하는 훅
└── index.tsx              # 애플리케이션 진입점
```

### 주요 기능

- **Router**: SPA에서 경로를 관리하며, 첫 번째로 매칭되는 `Route` 컴포넌트를 렌더링합니다.
- **Route**: 지정된 경로와 일치할 때 컴포넌트를 렌더링합니다.
- **Link**: 페이지를 새로고침하지 않고 경로를 변경하여 SPA의 느낌을 제공합니다.
- **useLocation**: 현재 URL 경로와 쿼리 문자열에 쉽게 접근할 수 있는 훅입니다.
- **useParams**: URL 경로에서 파라미터를 추출하여 반환하는 훅입니다.
- **useQueryString**: URL의 쿼리 문자열을 파싱하여 객체 형태로 반환하는 훅입니다.

### 실행 방법

```bash
# 프로젝트 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

### 참고하면 정말 좋은 자료

- [History API](https://developer.mozilla.org/ko/docs/Web/API/History_API)
- [Location API](https://developer.mozilla.org/ko/docs/Web/API/Location)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)