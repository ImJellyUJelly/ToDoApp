namespace ToDoApp.Models
{
    public class ToDoItem
    {
        public string Title { get; }
        public bool Done { get; set; }

        public ToDoItem(string title)
        {
            Title = title;
        }
    }
}