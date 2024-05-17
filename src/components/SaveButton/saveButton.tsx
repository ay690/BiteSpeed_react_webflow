import { Button } from "@mantine/core"

const SaveButton: React.FC = () => {
 
    const handleSave = () => {
        console.log("Save button clicked")
    }


  return (
    <div className="save=button">
      <Button type="submit" variant="outline" onClick={handleSave}>
        Save Changes
      </Button>
    </div>
  )
}

export default SaveButton;
