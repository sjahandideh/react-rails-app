require 'rest-client'

class ImagesApi

  def header_options
    {
      content_type: :json,
      accept: :json,
      authorization: "Client-ID #{ENV['IMGUR_CLIENT_KEY']}"
    }
  end

  def list_url
    "https://api.imgur.com/3/album/yIdY2/images"
  end

  def all
    RestClient.get list_url, header_options
  end

end
