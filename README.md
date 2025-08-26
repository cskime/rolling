# Rolling: 롤링 페이퍼 커뮤니티 플랫폼

## 소개

- 코드잇 스프린트 FE 18기 기초 팀 프로젝트
- 스프린트 과정에서 학습한 기술들을 중심으로 구현

## 기술스택

- React
- React Router
- Styled Components
- Axios

## 참고 자료

- [Vite | Vite의 환경 변수와 모드](https://ko.vite.dev/guide/env-and-mode)
- [MDN | Clipboard API](https://developer.mozilla.org/ko/docs/Web/API/Clipboard_API)


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
- 팀원들이 만든 PR의 코드 리뷰
    - https://github.com/codeit-FE-18-part2/rolling/pull/23#discussion_r2271472628
    - https://github.com/codeit-FE-18-part2/rolling/pull/23#discussion_r2277835736
    - https://github.com/codeit-FE-18-part2/rolling/pull/54#discussion_r2281056746

### 배포

- 배포 환경에 따라 다르게 사용될 값을 환경 변수 파일로 관리
- 배포 자동화를 위한 GitHub Actions workflow 작성
    - Vercel은 organization repository에 대해 유료 plan을 사용해야 하므로 forked repository를 배포용 repository로 사용
    - Upstream repository의 `develop` branch에 commit이 push 또는 merge되면 forked repository로 push하는 workflow 작성
    

### 개발

> 과정에서 학습한 React와 styled components를 활용하여 외부 라이브러리 없이 최대한 직접 구현하려 노력했습니다.

#### 공통 컴포넌트 개발 ([Issue](https://github.com/orgs/codeit-FE-18-part2/projects/1?pane=issue&itemId=123586709&issue=codeit-FE-18-part2%7Crolling%7C4))

<img src="/docs/images/img-test-comps.png" alt="공통 컴포넌트 테스트 페이지" width="400px" />

- 프로젝트 초기에 Button, TextField 등 팀원들이 담당한 화면을 개발하기 위해 필요한 공통 컴포넌트 개발
- 공통 컴포넌트를 테스트하고 팀원들에게 기본적인 사용 방법 예시를 제공하기 위해 별도의 페이지 개발
- Storybook을 사용할 수도 있었지만, 학습한 것을 연습하는 것에 집중하기 위해 새로운 도구는 도입하지 않음

#### 카카오톡 공유하기 기능 개발 ([PR](https://github.com/codeit-FE-18-part2/rolling/pull/66))

<img src="/docs/images/img-kakao-share.png" alt="카카오톡 공유 예시" width="200px" />

- KakaoTalk JavaScript API를 연동하고 custom message template를 사용하여 공유하기 기능 개발
- 상용 환경과 개발 환경을 구분하여 JavaScript API key 및 template ID를 환경 변수로 관리

#### `IntersectionObserver`를 활용한 무한 스크롤 구현

#### 테스트 데이터 관리 페이지 개발

<img src="/docs/images/img-test-api.png" alt="공통 컴포넌트 테스트 페이지" width="600px" />

- 개발 서버에 주입할 테스트 데이터를 생성, 조회, 삭제 등 관리하기 위한 별도의 페이지 개발
- 팀원들이 편리하게 테스트 데이터를 관리할 수 있도록 하여 API 연동 개발 시 생산성 향상에 기여함

## 새로 배운 것

- React portal
- Clipboard API
- `IntersectionObserver`
- Animation이 끝났을 때 component를 unmount 시키기

## 시도한 것

- PR 생성 시 Vercel에 preview 배포를 진행해서 결과물을 바로 확인하기

## KPT 회고

### Keep

### Problem

### Try