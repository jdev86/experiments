const Layout = ({ children }: {
    children: React.ReactNode;
}): JSX.Element => {
    return (
        <section
          style={{
            height: "100%",
            borderTop: "2rem solid transparent",
            borderImage: "linear-gradient(to right, #032642, #05518e, #0d73c6)",
            borderImageSlice: 1,
            backgroundImage: ''
          }}>
            {children}
          <p style={{ paddingBottom: "1rem"}} id="love">
            Carefully crafted with
            <svg
              fill="currentColor"
              stroke="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </p>
        </section>
    )
}

export default Layout
