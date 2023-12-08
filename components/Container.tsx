const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full min-h-full">
      {children}
    </section>
  )
}

export default Container