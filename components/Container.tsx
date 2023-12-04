const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full min-h-full p-5">
      {children}
    </section>
  )
}

export default Container