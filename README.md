# Rolling: 롤링 페이퍼 커뮤니티 플랫폼

## 소개

- 코드잇 스프린트 프론트엔드 과정에 18기로 참여하고 진행한 첫 번째 팀 프로젝트
- 의도적으로 배우지 않은 기술과 외부 라이브러리 사용을 최대한 자제하고 **학습한 기술들의 숙련도 향상**에 초점을 맞추어 진행

## 기술스택

- UI
    - React
    - Styled Components
- Routing
    - React Router
- Network
    - Axios : Fetch API를 활용하여 공통 네트워크 모듈을 개발하는 대신 팀원들에게 더 익숙한 axios 사용
- Deploy : 
    - Vercel : 향후 학습할 Next.js와 관련된 배포 환경을 미리 체험해 보기 위해 Vercel로 배포 진행
    - GitHub : Organization repository를 무료로 배포하기 위해 forked repository로 배포 우회
- Library
    - [React Quill New](https://www.npmjs.com/package/react-quill-new?activeTab=readme) : Text editor 개발 시간 단축을 위해 외부 라이브러리 사용
    - [Emoji Picker React](https://www.npmjs.com/package/emoji-picker-react) : Emoji picker 개발 시간 단축을 위해 외부 라이브러리 사용

## 참고 자료

### 공식 문서

- [MDN | Clipboard API](https://developer.mozilla.org/ko/docs/Web/API/Clipboard_API)
- [MDN | IntersectionObserver API](https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API)
- [MDN | Window: matchMedia() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
- [MDN | Element: getBoundingClientRect() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
- [React | createPortal](https://react.dev/reference/react-dom/createPortal)
- [Vite | Vite의 환경 변수와 모드](https://ko.vite.dev/guide/env-and-mode)

### 블로그

- [React portal을 활용한 드롭다운 컴포넌트 구현하기](https://ji-hoon.github.io/blog/implement-dropdown-with-react-portal)
- [마운트 될 때와 언마운트 될 때 각기 다른 애니메이션 적용하기](https://seo-tory.tistory.com/73)

## 담당 역할 및 개발 내용

### 프로젝트 세팅

- GitHub repository의 branch ruleset 설정
    - Direct push 및 force push 금지
    - Branch 삭제 금지
    - PR merge를 위한 approve 조건 설정 (최소 2명)
- Pull request 관련 알림을 위한 discord webhook 연동 및 설정

### 협업

- 모든 팀원들이 일관된 형식으로 PR을 작성하기 위한 [PR template](https://github.com/codeit-FE-18-part2/rolling/blob/develop/.github/pull_request_template.md) 추가
- 작업 종류에 따라 일관된 issue를 작성하기 위한 5가지 [issue template](https://github.com/codeit-FE-18-part2/rolling/tree/develop/.github/ISSUE_TEMPLATE) 추가
- PR 생성 시 자동으로 reviewer를 추가하기 위한 '[auto assign  app](https://github.com/codeit-FE-18-part2/rolling/blob/develop/.github/auto_assign.yml)' 설정
- GitHub [issue](https://github.com/codeit-FE-18-part2/rolling/issues)와 [project board](https://github.com/orgs/codeit-FE-18-part2/projects/1)를 활용한 할 일 및 일정 관리 방식 수립
- GitHub [WiKi](https://github.com/codeit-FE-18-part2/rolling/wiki)를 활용하여 프로젝트 규칙, 참고자료 등 문서화
- 팀원들이 생성한 PR의 코드 리뷰 ([예시 1](https://github.com/codeit-FE-18-part2/rolling/pull/23#discussion_r2271472628), [예시 2](https://github.com/codeit-FE-18-part2/rolling/pull/23#discussion_r2277835736), [예시 3](https://github.com/codeit-FE-18-part2/rolling/pull/54#discussion_r2281056746))

### 배포

- 배포 환경에 따라 다르게 사용될 값을 환경 변수 파일로 관리
- 배포 자동화를 위한 [GitHub Actions workflow](https://github.com/codeit-FE-18-part2/rolling/tree/develop/.github/workflows) 작성
    - Vercel은 organization repository에 대해 유료 plan을 사용해야 하므로 forked repository를 배포용 repository로 사용
    - Upstream repository의 `develop` branch에 commit이 push 또는 merge되면 forked repository로 push하는 workflow 작성
    

### 개발

#### `IntersectionObserver`를 활용한 무한 스크롤 구현

- 

#### React portal을 활용하여 컴포넌트를 별도의 layer에 render

- 

#### Component를 animation 종료 후 unmount 하는 custom hook 구현

- 

#### `matchMedia()` method를 활용하여 JavaScript에서 media query matching 감지

- 

#### 카카오톡 공유하기 기능 개발 ([PR](https://github.com/codeit-FE-18-part2/rolling/pull/66))

<img src="/docs/images/img-kakao-share.png" alt="카카오톡 공유 예시" width="200px" />

- KakaoTalk JavaScript API를 연동하고 custom message template를 사용하여 공유하기 기능 개발
- 상용 환경과 개발 환경을 구분하여 JavaScript API key 및 template ID를 환경 변수로 관리

#### 공통 컴포넌트 개발 ([Issue](https://github.com/orgs/codeit-FE-18-part2/projects/1?pane=issue&itemId=123586709&issue=codeit-FE-18-part2%7Crolling%7C4))

<img src="/docs/images/img-test-comps.png" alt="공통 컴포넌트 테스트 페이지" width="400px" />

- 프로젝트 초기에 Button, TextField 등 팀원들이 담당한 화면을 개발하기 위해 필요한 공통 컴포넌트 개발
- 공통 컴포넌트를 테스트하고 팀원들에게 기본적인 사용 방법 예시를 제공하기 위해 별도의 페이지 개발
- Storybook을 사용할 수도 있었지만, 학습한 것을 연습하는 것에 집중하기 위해 새로운 도구는 도입하지 않음

#### 테스트 데이터 관리 페이지 개발

<img src="/docs/images/img-test-api.png" alt="공통 컴포넌트 테스트 페이지" width="600px" />

- 개발 서버에 주입할 테스트 데이터를 생성, 조회, 삭제 등 관리하기 위한 별도의 페이지 개발
- 팀원들이 편리하게 테스트 데이터를 관리할 수 있도록 하여 API 연동 개발 시 생산성 향상에 기여함

## 새로 배운 것

- React portal
- Clipboard API
- `IntersectionObserver`
- Animation이 끝났을 때 component를 unmount 시키기

## 시도해 봤지만 구현하지 못한 것

### PR 생성 시 결과물을 바로 확인하기

- 목표 : PR을 만들 때마다 Vercel에 배포해서 reviewer가 프로젝트를 실행하지 않고 결과를 확인하여 생산성을 향상
- 시도 : PR이 생성되면 Vercel CLI를 사용해서 source branch를 기준으로 Vercel에 preview 배포하는 GitHub Actions workflow 작성
- 문제 : Forked repository에서 trigger된 pull request event에 의해 실행되는 workflow는 upstream repository에 설정된 secrets variables에 접근할 수 없으므로 workflow를 실행할 수 없음
- 결과 : 
    - Forked repository를 사용하지 않는 협업 방식을 사용했다면 쉽게 구현할 수 있었음
    - 개발 중간에 upstream repository 하나만 사용하는 방식으로 변경하는 것은 투입하는 리소스에 비해 효과는 작을 것으로 판단하여 보류
    - 가능하다 하더라도, upstream repository가 조직 계정에 묶여 있어서 Vercel 배포가 어려운 상황임

## KPT 회고

### Keep

### Problem

### Try