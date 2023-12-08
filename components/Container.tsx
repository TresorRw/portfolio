const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full py-5 min-h-full">
      {children}
    </section>
  )
}

export default Container