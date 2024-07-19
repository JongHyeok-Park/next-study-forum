export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="api/post" method="POST">
        <input type="text" name="title" id="title" />
        <input type="text" name="content" id="content" />
        <button type="submit">제출</button>
      </form>
    </div>
  )
}