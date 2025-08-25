document.addEventListener("DOMContentLoaded", function () {
  // 모바일 메뉴 토글 기능
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav ul");
  const createPaperBtnMobile = document.querySelector(".create-paper-btn");

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
        mobileMenuBtn.classList.remove("active");
      } else {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "60px";
        navMenu.style.right = "20px";
        navMenu.style.backgroundColor = "white";
        navMenu.style.padding = "15px";
        navMenu.style.borderRadius = "8px";
        navMenu.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
        navMenu.style.zIndex = "100";
        mobileMenuBtn.classList.add("active");
      }
    });
  }

  // 이모지 반응 토글 기능
  const reactionsContainer = document.querySelector(".reactions-container");
  const reactionsDropdown = document.querySelector(".reactions-dropdown");
  const reactionAdd = document.querySelector(".reaction-add");

  // 초기에는 드롭다운 숨기기
  if (reactionsDropdown) {
    reactionsDropdown.style.display = "none";
  }

  // 이모지 추가 버튼 클릭 시 드롭다운 토글
  if (reactionAdd) {
    reactionAdd.addEventListener("click", function (e) {
      e.stopPropagation();
      if (reactionsDropdown.style.display === "none") {
        reactionsDropdown.style.display = "block";
      } else {
        reactionsDropdown.style.display = "none";
      }
    });
  }

  // 드롭다운 외부 클릭 시 닫기
  document.addEventListener("click", function (event) {
    if (reactionsContainer && !reactionsContainer.contains(event.target)) {
      if (reactionsDropdown) {
        reactionsDropdown.style.display = "none";
      }
    }
  });

  // 새 카드 추가 버튼 기능
  const addCardButton = document.querySelector(".add-card");
  if (addCardButton) {
    addCardButton.addEventListener("click", function () {
      alert("새 메시지를 작성할 수 있는 폼이 열립니다.");
      // 실제 구현에서는 모달 폼을 열거나 페이지 이동 등의 기능 구현
    });
  }

  // 이모지 반응 클릭 시 카운트 증가 (예시 기능)
  const reactionCounts = document.querySelectorAll(".reaction-count");
  reactionCounts.forEach(function (reaction) {
    reaction.addEventListener("click", function (e) {
      e.stopPropagation(); // 상위 이벤트 전파 방지
      const countElement = this.querySelector("span:last-child");
      if (countElement) {
        let count = parseInt(countElement.textContent);
        countElement.textContent = count + 1;
      }
    });
  });

  // CTA 버튼 클릭 이벤트
  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", function () {
      window.location.href = "#"; // 실제 구현에서는 롤링페이퍼 목록 페이지로 이동
    });
  }

  // 롤링페이퍼 만들기 버튼 클릭 이벤트
  const createPaperBtn = document.querySelector(".create-paper-btn");
  if (createPaperBtn) {
    createPaperBtn.addEventListener("click", function () {
      window.location.href = "#"; // 실제 구현에서는 롤링페이퍼 생성 페이지로 이동
    });
  }

  // 반응형 디자인을 위한 추가 기능
  function handleResize() {
    // 화면 크기에 따라 동적으로 조정이 필요한 요소들 처리
    const windowWidth = window.innerWidth;
    const cardsContainer = document.querySelector(".cards-container");
    const cardsWrapper = document.querySelector(".cards-wrapper");

    // 모바일 메뉴 처리
    if (windowWidth > 768) {
      const navMenu = document.querySelector(".nav ul");
      if (navMenu) {
        navMenu.removeAttribute("style");
      }
    }

    // 카드 컨테이너 스크롤 처리
    if (cardsContainer && cardsWrapper) {
      // 스크롤 인디케이터 추가 (모바일에서만)
      if (windowWidth <= 768) {
        if (!document.querySelector(".scroll-indicator")) {
          const scrollIndicator = document.createElement("div");
          scrollIndicator.className = "scroll-indicator";
          const scrollIndicatorSpan = document.createElement("span");
          scrollIndicator.appendChild(scrollIndicatorSpan);
          cardsWrapper.after(scrollIndicator);
        }
      } else {
        // 태블릿/데스크톱에서는 스크롤 표시기 제거
        const scrollIndicator = document.querySelector(".scroll-indicator");
        if (scrollIndicator) {
          scrollIndicator.remove();
        }
      }
    }
  }

  // 초기 로드 및 리사이즈 시 실행
  handleResize();
  window.addEventListener("resize", handleResize);

  // 화면 방향 변경 감지
  window.addEventListener("orientationchange", () => {
    setTimeout(handleResize, 300); // 방향 변경 후 약간의 지연 시간을 두고 실행
  });

  // 카드 컨테이너 스크롤 이벤트
  const cardsContainer = document.querySelector(".cards-container");
  if (cardsContainer) {
    cardsContainer.addEventListener("scroll", function () {
      const scrollIndicator = document.querySelector(".scroll-indicator span");
      if (scrollIndicator) {
        const scrollPercentage =
          (this.scrollLeft / (this.scrollWidth - this.clientWidth)) * 100;
        scrollIndicator.style.width = scrollPercentage + "%";
      }
    });
  }
  // 카드 컨테이너 가로 스크롤 감추기이벤트
  const cardsContainer = document.querySelector(".cards-container");
  if (cardsContainer) {
    // 모바일 환경에서 가로 스크롤 기능 비활성화
    if (window.innerWidth <= 768) {
      cardsContainer.style.overflowX = "hidden";
      cardsContainer.style.overflowY = "auto";

      // 스크롤 인디케이터 제거
      const scrollIndicator = document.querySelector(".scroll-indicator");
      if (scrollIndicator) {
        scrollIndicator.style.display = "none";
      }
    } else {
    }
  }
});
