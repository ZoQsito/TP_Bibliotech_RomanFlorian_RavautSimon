<?php

namespace App\Controller;

use App\Repository\PageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FklivreController extends AbstractController
{
    private $pageRepository;

    public function __construct(PageRepository $pageRepository)
    {
        $this->pageRepository = $pageRepository;
    }

    /**
     * @Route("/fklivre/{param}", name="app_fklivre_list", methods={"DELETE"})
     */
    public function list($param): JsonResponse
    {
        $pages = $this->pageRepository->findByFkLivre($param);
        
        return $this->json($pages, Response::HTTP_OK);

        // return $this->json(['param' => $param]);
    }
}
