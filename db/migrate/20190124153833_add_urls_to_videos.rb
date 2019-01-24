class AddUrlsToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :video_url, :string
    add_column :videos, :thumbnail_url, :string
  end
end
