class UpdateVideos < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :video_url, :string
    remove_column :videos, :thumbnail_url, :string
    change_column_null :videos, :description, false
  end
end
